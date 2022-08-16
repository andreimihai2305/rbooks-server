import { CorsOptions } from "cors";

const allowedOrigins = ["http://localhost:3000"];

const corsOptions: CorsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS."));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
