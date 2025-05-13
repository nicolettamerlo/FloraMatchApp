import axios from 'axios';
import SelectMenu from './SelectMenu';
import { toast } from 'react-toastify';
import { bloomingSeasonsOptions, careDifficultiesOptions, environmentsOptions, petFriendlyOptions } from '../constants/formOptions';
import { useFloraMatch } from '../context/FloraMatchContext';

function MatchForm() {

    const API_URL = "/api/FloraMatch/match";

    const { filter, setFilter, setMatchedFlowers, setIsMatchForm, setFallbackFlowers, isMatchForm, setLoading } = useFloraMatch();

    if (!isMatchForm) return null;

    const defaultFilter = {
        petFriendly: 'indifferent',
        bloomingSeason: 'indifferent',
        careDifficulty: 'indifferent',
        environment: 'indifferent',
    }

    const handleFindClick = async () => {
        try {
            setLoading(true);
            setIsMatchForm(false);
            
            const response = await axios.post(API_URL, filter);
            if (response.data.length > 0) {
                setMatchedFlowers(response.data);
            } else {
                const fallbackResponse = await axios.post(API_URL, defaultFilter);
                setFallbackFlowers(fallbackResponse.data);
            }
            

        } catch (error) {
            console.error('Error occurred retrieving flowers:', error);

            if (error.response && error.response.status === 500) {
                toast.error("Hosted on limited resources — please retry if the response is delayed.");
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
            setIsMatchForm(true);

        } finally {
            setLoading(false);
        }
    };


    const handleChange = (key, value) => {
        setFilter(prev => ({ ...prev, [key]: value }));
    };

    return (
        <section className="flex justify-center px-4">
            <div className="bg-gradient-to-b from-[var(--color-green)] to-[var(--color-primary-transparent)] 
            border border-primary shadow-md rounded-2xl p-6 sm:p-10 w-full max-w-3xl space-y-10 transition-opacity">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <SelectMenu title="Pet Friendly" options={petFriendlyOptions} handleOptions={(val) => handleChange('petFriendly', val)} value={filter.petFriendly} />
                    <SelectMenu title="Blooming Season" options={bloomingSeasonsOptions} handleOptions={(val) => handleChange('bloomingSeason', val)} value={filter.bloomingSeason} />
                    <SelectMenu title="Care Difficulty" options={careDifficultiesOptions} handleOptions={(val) => handleChange('careDifficulty', val)} value={filter.careDifficulty} />
                    <SelectMenu title="Environment" options={environmentsOptions} handleOptions={(val) => handleChange('environment', val)} value={filter.environment} />
                </div>
                <div className="flex justify-center">
                    <button onClick={handleFindClick} className="btn-large">🔍 Find Flowers</button>
                </div>
            </div>
        </section>
    );
}

export default MatchForm;
