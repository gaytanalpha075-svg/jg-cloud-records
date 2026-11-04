import { randomUUID } from "node:crypto";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "jg-cloud-records-orders";

export const handler = async (event) => {
    try {
        const order = JSON.parse(event.body || "{}");

        const name = String(order.name || "").trim();
        const email = String(order.email || "").trim();
        const album = String(order.album || "").trim();

        if (!name || !email || !album) {
            return {
                statusCode: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    message: "Missing order information."
                })
            };
        }

        const orderId = randomUUID();

        const newOrder = {
            orderId: orderId,
            name: name,
            email: email,
            album: album,
            createdAt: new Date().toISOString()
        };

        const command = new PutCommand({
            TableName: TABLE_NAME,
            Item: newOrder
        });

        await documentClient.send(command);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                message: `Order received successfully! Thank you, ${name}.`,
                orderId: orderId,
                album: album
            })
        };

    } catch (error) {
        console.error("DynamoDB order error:", error);

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                message: "There was a problem processing the order."
            })
        };
    }
};