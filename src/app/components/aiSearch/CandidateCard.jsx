import { useState } from 'react';
import PropTypes from 'prop-types'

import ProfileCard from './ProfileCard';
import { BookmarkActive, BookmarkWhite, HireIcon } from '../../../assets/images';
import { t } from 'i18next';

export default function CandidateCard({ candidateData }) {

    const { finalImageUrl, name, skills, country, yearsOfWorkExperience, summary, fullTime, partTime, status, fullTimePrice, partTimePrice } = candidateData;

    const [isShortlisted, setIsShortlisted] = useState(status === "shortlisted" ? true : false);
    const [toggleView, setToggleView] = useState(false);

    const handleShortlist = () => {
        setIsShortlisted(!isShortlisted);
        //TODO: Make api call to shortlist candidate.
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
                        <span className='chatCanvas_message_candidate_exp'>Exp: {yearsOfWorkExperience} Years</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_country'>{country}</span>

                    </div>
                    <div className='chatCanvas_message_candidate_topRight'>
                        <button className={`btn-primary btn-shadow flex flex-center gap-1 ${isShortlisted ? "btn-active" : "btn-inactive"}`} onClick={handleShortlist}>
                            <img src={isShortlisted ? BookmarkActive : BookmarkWhite} alt='Shortlisted' />
                            {isShortlisted ? t("tShortlisted") : t("tShortlist")}
                        </button>
                        <button className='btn-primary btn-shadow flex flex-center btn-hire' >
                            <img src={HireIcon} alt='Hire' className='hireIcon' />
                            <p className=' ' >Hire Instantly</p> </button>
                    </div>
                </div>
                <div className=' chatCanvas_message_candidate_middle'>
                    <div className='chatCanvas_message_candidate_info'>
                        <span><b>Available for :</b></span>
                        <span>{fullTime ? `Full Time @ $ ${fullTimePrice}` : null}</span>
                        <span>{partTime ? `| Part Time $ ${partTimePrice}` : null}</span>
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
            {/* Bottom card */}
            <div>
                {toggleView && <ProfileCard candidateData={candidateData} />}
            </div>
            {/* Card Toggler */}
            <div>
                <button className='btn-primary btn-extended' onClick={handleToggleView}>{toggleView ? "Hide details ^" : "View Profile"}</button>
            </div>
        </div>
    )
}

CandidateCard.propTypes = {
    candidateData: PropTypes.shape({
        finalImageUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        country: PropTypes.string.isRequired,
        yearsOfWorkExperience: PropTypes.number.isRequired,
        summary: PropTypes.string.isRequired,
        fullTime: PropTypes.bool.isRequired,
        partTime: PropTypes.bool.isRequired,
        status: PropTypes.string.isRequired
    })
}

