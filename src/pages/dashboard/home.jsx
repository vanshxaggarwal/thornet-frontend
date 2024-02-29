import { PotentialBreache } from "@/components/dashboard/potential_breache";
import { OutdatedScans } from "@/components/dashboard/outdatedscans"
import { Tiles } from "@/components/dashboard/tiles"
import OpenVuln from "../../components/chart/open_vuln";
export function Home() {
    return (
        <div>
            <div className="mt-12 uppercase">                
                <Tiles/>
                <OpenVuln/>
                     
                <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3 overflow-hidden">
                    <PotentialBreache/>
                    <OutdatedScans/>
                </div>
            </div>
        </div>
    );
}

export default Home;