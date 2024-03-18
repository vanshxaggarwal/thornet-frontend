import { PotentialBreache } from "@/components/dashboard/potential_breache";
import { OutdatedScans } from "@/components/dashboard/outdatedscans"
import { Tiles } from "@/components/dashboard/tiles"
import { CloseVuln } from "../../components/chart/close_vuln";
import OpenVuln from "@/components/chart/open_vuln";
export function Home() {
    return (
        <div>
            <div className="mt-12 uppercase">                
                <Tiles/>
                <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                    <CloseVuln/>
                    <OpenVuln/>
                    <OpenVuln/>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3 overflow-hidden">
                    <PotentialBreache/>
                    <OutdatedScans/>
                    <>a</>
                </div>
            </div>
        </div>
    );
}

export default Home;