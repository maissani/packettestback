import logger from "./logger";

const clientApiKeyValidation = async (req: any, res: any, next: any) => {
   const clientApiKey = req.get("api_key");
   if (!clientApiKey) {
      return res.status(400).send({
        response: "Missing Api Key",
        status: false,
      });
   }
   try {
      if (process.env.API_KEY) {
        next();
      }
   } catch (e) {
      logger.log("%%%%%%%% error :", e);
      return res.status(400).send({
        response: "Invalid Api Key",
        status: false,
      });
   }
};

export default clientApiKeyValidation;
