import { suspensePageCss } from "./suspense-page.css";
import {Suspense} from "react";
import LoadingRow from "@/components/loading/LoadingRow";
import AlbumSection from "@/components/albums/AlbumSection";

export default function ReactComponentSuspensePage() {
    return (
        <div className={suspensePageCss}>
            <Suspense fallback={<LoadingRow />}>
                <AlbumSection />
            </Suspense>
        </div>
    );
}
