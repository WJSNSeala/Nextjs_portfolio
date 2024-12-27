import {loadingRowCss} from "@/components/loading/loadingrow.css";

export default function LoadingRow() {
    return (
        <div className={loadingRowCss}>
            <div>Loading...</div>
        </div>
    );
}