import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const documentClient =
    DynamoDBDocumentClient.from(client);

const TABLE_NAME = "jg-cloud-records-catalog";

export const handler = async (event) => {
    try {
        const command = new ScanCommand({
            TableName: TABLE_NAME
        });

        const result =
            await documentClient.send(command);

        const genreOrder = [
            "rock",
            "hiphop",
            "pop",
            "latin",
            "rnb"
        ];

        const catalogData = (result.Items || []).sort(
            (a, b) =>
                genreOrder.indexOf(a.id) -
                genreOrder.indexOf(b.id)
        );

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(catalogData)
        };
    } catch (error) {
        console.error("DynamoDB error:", error);

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                message: "Could not load catalog from DynamoDB."
            })
        };
    }
};