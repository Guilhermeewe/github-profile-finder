import { FiAlertTriangle } from "react-icons/fi";

function Error() {
    return (
        <p className="text-xl text-red-600 font-extrabold animate-pulse flex items-center gap-2 border-2 border-dotted border-red-600 p-2 m-2">
            <FiAlertTriangle />
            <span>Usuário Inexistente</span>
        </p>
    );
}

export default Error;