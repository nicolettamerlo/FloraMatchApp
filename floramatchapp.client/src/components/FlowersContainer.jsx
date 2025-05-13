import FlowerCard from './FlowerCard';
import NoMatchMessage from './NoMatchMessage';
import Loader from './Loader';
import { useFloraMatch } from '../context/FloraMatchContext';


function FlowersContainer() {

    const { isMatchForm, matchedFlowers, fallbackFlowers, loading } = useFloraMatch();

    return (

        loading
            ? <Loader />
            :
            <div>
                { /* flowers cards */}
                <div className={"grid justify-items-center transition-opacity duration-700 ease-in-out"}>
                    <div className={"grid justify-items-center transition-opacity duration-700 ease-in-out"}>
                        {matchedFlowers.length > 0 && !isMatchForm &&
                            <div className="flex flex-wrap max-w-[1600px] mx-auto justify-items-center justify-center gap-10 xl:gap-12 2xl:gap-15 pt-6">
                                {matchedFlowers.map((flower, index) => (
                                    <FlowerCard key={index} flower={flower} />
                                ))}
                            </div>
                        }
                        {matchedFlowers.length == 0 && !isMatchForm &&
                            <>
                                <p className="px-4">😔 No match found — but you might love these! Feel free to refine your search and try again.</p>
                                <div className="flex flex-wrap max-w-[1600px] mx-auto justify-items-center justify-center gap-10 xl:gap-12 2xl:gap-15 pt-6">
                                    <div className="flex flex-wrap max-w-[1600px] mx-auto justify-items-center justify-center gap-10 xl:gap-12 2xl:gap-15 pt-6">
                                        {fallbackFlowers.map((flower, index) => (
                                            <FlowerCard key={index} flower={flower} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>

    )
}

export default FlowersContainer