import { useState } from 'react';
import PropTypes from 'prop-types'
import { t } from 'i18next';
import axios from 'axios';

import ProfileCard from './ProfileCard';
import { BookmarkActive, BookmarkWhite, HireIcon } from '../../../assets/images';
import { SHORTLISTED_CANDIDATES } from '../../../utils/apiConstants';
import getToken from '../../../utils/getToken';

export default function CandidateCard({ candidateData }) {

    const { finalImageUrl, name, skills, country, yearsOfWorkExperience, summary, fullTime, partTime, status, fullTimePrice, partTimePrice, resumeId, userId } = candidateData;

    const [isShortlisted, setIsShortlisted] = useState(status === "shortlisted" ? true : false);
    const [toggleView, setToggleView] = useState(false);

    const deleteShortListedCandidates = async () => {
        const response = await axios.delete(SHORTLISTED_CANDIDATES, {
            "shortlistedCandidateId": userId,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('MercorUserToken')}`
            }
        })
        if (response.data == "true") {
            setIsShortlisted(false)
        }

    }
    const postShortListedCandidates = async () => {
        try {
            const response = await axios.post(SHORTLISTED_CANDIDATES, {
                "shortlistedCandidateId": userId,
                "contractorId": "test@mercor.com",
                "contractorName": name,
                "contractorUserId": "b4fcaff2-ab95-11ee-a4ba-42010a400021",
                "userId": "hello.shahanshah@gmail.com",
                "fullTimeAmount": fullTimePrice,
                "partTimeAmount": partTimePrice,
                "status": "shortlisted",
                "userEmail": "hello.shahanshah@gmail.com", "userShortlistTabId": null,
                "resumeId": resumeId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('MercorUserToken')}`
                }
            })
            console.log("shortlisted", response)
            if (response.data == 'true') {
                setIsShortlisted(true)
            }

        } catch (error) {
            if (error.response?.status === 403) {
                getToken(postShortListedCandidates);
            } else {
                console.log(error)
            }
            //TODO: ADD TOAST MESSAGE
        }
    }

    const handleShortlist = () => {
        setIsShortlisted(!isShortlisted);
        //TODO: Make api call to shortlist candidate.
        if (!isShortlisted) {
            postShortListedCandidates()
        } else {
            deleteShortListedCandidates()
        }
    }

    const handleToggleView = () => {
        setToggleView(!toggleView);
    }

    return (
        <div className='chatCanvas_message_candidate'>
            <div>
                <div className='chatCanvas_message_candidate_top'>
                    <div className='chatCanvas_message_candidate_topLeft'>
                        <span className='chatCanvas_message_candidate_image'>
                            <img src={finalImageUrl} alt={name} className='' />
                        </span>

                        <span className='chatCanvas_message_candidate_name'>{name}</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_exp'>{t('Exp:')} {yearsOfWorkExperience} {t('tYears')}</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_country'>{country}</span>

                    </div>
                    <div className='chatCanvas_message_candidate_topRight'>
                        <button className={`btn-primary btn-shadow flex flex-center gap-1 ${isShortlisted ? "btn-active" : "btn-inactive"}`} onClick={handleShortlist}>
                            <img src={isShortlisted ? BookmarkActive : BookmarkWhite} alt={t('tShortlisted')} />
                            {isShortlisted ? t("tShortlisted") : t("tShortlist")}
                        </button>
                        <button className='btn-primary btn-shadow flex flex-center btn-hire' >
                            <img src={HireIcon} alt={t('tHire')} className='hireIcon' />
                            <p>{t('tHireInstantly')}</p> </button>
                    </div>
                </div>
                <div className=' chatCanvas_message_candidate_middle'>
                    <div className='chatCanvas_message_candidate_info'>
                        <span><b>{t('availableFor')}</b></span>
                        <span>{fullTime ? `${t('fullTime@')}${fullTimePrice}` : null}</span>
                        <span>{partTime ? `${t('partTime@')}${partTimePrice}` : null}</span>
                    </div>
                    <div className='chatCanvas_message_candidate_info'>
                        <b>{t("expertIn")}</b> {skills.map((skill, index) => (
                            <p key={index} >{skill}</p>
                        ))}
                    </div>
                    <div className='chatCanvas_message_candidate_info'>
                        <p className='bg-dark max-w-60'><i>{summary}</i></p>
                    </div>
                </div>
            </div>
            {toggleView && <ProfileCard candidateData={candidateData} />}
            <div>
                <button className='btn-primary btn-extended' onClick={handleToggleView}>{toggleView ? t("tHideDetails") : t("tViewProfile")}</button>
            </div>
        </div>
    )
}

CandidateCard.propTypes = {
    candidateData: PropTypes.shape({
        finalImageUrl: PropTypes.string,
        name: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        country: PropTypes.string,
        yearsOfWorkExperience: PropTypes.number,
        summary: PropTypes.string,
        fullTime: PropTypes.number,
        partTime: PropTypes.number,
        status: PropTypes.string,
        fullTimePrice: PropTypes.number,
        partTimePrice: PropTypes.number,
        resumeId: PropTypes.string,
        userId: PropTypes.string
    })
}

