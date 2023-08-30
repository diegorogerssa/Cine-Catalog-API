const { z } = require('zod');

const validId = (req, res, next) => {
  const { id } = req.params;
  const schemaId = z.object({
    id: z.number(),
  });
  const validIdfilm = schemaId.safeParse({
    id: Number(id),
  });
  if (!validIdfilm.success) {
    return res.status(400).json({message: `${validIdfilm.error.issues[0].path}:  ${validIdfilm.error.errors[0].message}`});
  }
  
  next();
};

module.exports = {
  validId,
};
