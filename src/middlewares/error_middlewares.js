export const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      //   err: err.name,
      message: err.message || "Server Error",
    },
  });
};

// export const notFound = (req: Request, res: Response, next: NextFunction) => {
//   const error = new Error(`Route not found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// };
