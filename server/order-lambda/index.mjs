export const handler = async (event) => {

  try {

      const order = JSON.parse(event.body || "{}");

      const name = order.name;
      const email = order.email;
      const album = order.album;

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

      return {
          statusCode: 200,

          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
          },

          body: JSON.stringify({
              message: `Order received successfully! Thank you, ${name}.`,
              album: album,
              email: email
          })
      };

  } catch (error) {

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