import { useEffect, useState } from 'react'

import "../components/aiSearch/aiSearch.css";
import CandidateCard from '../components/aiSearch/CandidateCard';
import { CANDIDATE_PROFILE, SHORTLISTED_CANDIDATES } from '../../utils/apiConstants';
import api from '../../utils/axios';

export default function Shortlisted() {
    const [shortListedCandidates, setShortListedCandidates] = useState([]);
    const [profileList, setProfileList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getShortListedCandidates = async () => {
        try {
            const response = await api.get(SHORTLISTED_CANDIDATES)
            setShortListedCandidates(response?.data?.shortlist?.['my-shortlist'] ?? []);
        } catch (error) {
            console.log(error)
            //TODO: ADD TOAST MESSAGE
        }
    }

    const getProfile = async () => {
        shortListedCandidates?.length > 0 && shortListedCandidates.map(async (candidate) => {
            try {
                const response = await api.post(CANDIDATE_PROFILE, {
                    "resumeId": candidate?.resumeId,
                    "isWhiteListed": 0
                })
                response?.data[0] && setProfileList(prev => [...prev, { ...response?.data[0], "status": "shortlisted", }]);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        })
    }

    useEffect(() => {
        if (shortListedCandidates?.length === 0) {
            setIsLoading(true);
            getShortListedCandidates();
        }
    }, []);

    useEffect(() => {
        if (shortListedCandidates?.length > 0) {
            setIsLoading(true);
            getProfile();
        }
    }, [shortListedCandidates]);

    return (
        <div className="aiSearch">
            {isLoading && <div className='loader' />}

            <div className="chatContainer">

                <div className='chatCanvas'>
                    <div className='chatCanvas_chatContainer'>
                        <div className='chatCanvas_message'>

                            {
                                profileList?.map((profile, index) => {
                                    return (
                                        <CandidateCard key={index} candidateData={profile} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
