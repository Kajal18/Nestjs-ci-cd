declare const options: {
    infoFile: {
        level: string;
        filename: string;
        handleExceptions: boolean;
        json: boolean;
        maxsize: number;
        maxFiles: number;
    };
    errorFile: {
        level: string;
        filename: string;
        handleExceptions: boolean;
        json: boolean;
        maxsize: number;
        maxFiles: number;
    };
};
export default options;
