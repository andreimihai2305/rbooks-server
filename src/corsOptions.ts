const allowedOrigins = ["http://127.0.0.1:3000"];
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS."));
    }
  },
  optionsSuccesStatus: 200,
};

export default corsOptions;
