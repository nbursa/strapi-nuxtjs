module.exports = () => (
    () => {
        return {
            settings: {
                cors: {
                    enabled: false,
                    headers: '*', 
                    origin: ['*'],
                },
            },
        }
    }
);