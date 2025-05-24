import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    
    const handleRedirect = (url?: string) => {
        if (url) navigate(url);
        else navigate(location.pathname);
    };
    
    return { navigate, location, searchParams, handleRedirect };
}