const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.log(err.stack);
  return res.status(500).json(err.message);
};

export default errorHandler;
