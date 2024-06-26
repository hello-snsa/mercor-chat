import { useEffect, useState } from 'react'
import axios from 'axios';

import "../components/aiSearch/aiSearch.css";
import CandidateCard from '../components/aiSearch/CandidateCard';
import { CANDIDATE_PROFILE, SHORTLISTED_CANDIDATES } from '../../utils/apiConstants';
import getToken from '../../utils/getToken';

export default function Shortlisted() {
    const [shortListedCandidates, setShortListedCandidates] = useState([]);
    const [profileList, setProfileList] = useState([]);

    const getShortListedCandidates = async () => {
        try {
            const response = await axios.get(SHORTLISTED_CANDIDATES, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('MercorUserToken')}`
                }
            })
            setShortListedCandidates(response?.data?.shortlist?.['my-shortlist'] ?? []);
            console.log("shortListedCandidates", response?.data?.shortlist?.['my-shortlist']);
        } catch (error) {
            if (error.response?.status === 403) {
                getToken(getShortListedCandidates);
            } else {
                console.log(error)
            }

            //TODO: ADD TOAST MESSAGE
        }
    }

    const getProfile = async () => {
        shortListedCandidates?.length > 0 && shortListedCandidates.map(async (candidate) => {
            console.log("shortListedCandidates====>",shortListedCandidates);
            try {
                const response = await axios.post(CANDIDATE_PROFILE, {
                    "resumeId": candidate?.resumeId,
                    "isWhiteListed": 0
                })
                console.log("getProfile", response?.data[0]);
                response?.data[0] && setProfileList(prev => [...prev, {...response?.data[0],"status": "shortlisted",}]);
            } catch (error) {
                console.log(error)
            }
        })
    }

    useEffect(() => {
        shortListedCandidates?.length===0 && getShortListedCandidates();
    }, []);

    useEffect(() => {
        shortListedCandidates?.length>0 && getProfile();
    }, [shortListedCandidates]);

    return (
        <div className="aiSearch">

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
