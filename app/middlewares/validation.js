const postValidator = async (req, res, next) => {
	try {
		if (req.body.name=="" || req.body.name==undefined) {
			throw new Error("name required");
		}
        if (req.body.description=="" || req.body.description==undefined) {
			throw new Error("description required");
		}
       
        
		next();
	} catch (error) {
		next(error);
	}
};

module.exports=postValidator;