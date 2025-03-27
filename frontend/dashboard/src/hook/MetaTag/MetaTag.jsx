import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const MetaTag = ({title}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}

export default MetaTag;
