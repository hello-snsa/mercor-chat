import PropTypes from 'prop-types'
import { BookmarkActive, BookmarkWhite, HireIcon } from '../../../assets/images';
import { useState } from 'react';
import ProfileCard from './ProfileCard';

export default function CandidateCard({ candidateData }) {

    const { profilePic,finalImageUrl, name, skills, country, yearsOfWorkExperience, summary, fullTime, partTime,status } = candidateData;

    const [isShortlisted, setIsShortlisted] = useState(status==="shortlisted"?true:false);
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
            {/* Top card */}
            <div>
                <div className='chatCanvas_message_candidate_top'>
                    <div className='chatCanvas_message_candidate_topLeft'>
                        <span className='chatCanvas_message_candidate_image'>
                            <img src={finalImageUrl} alt={name} className='' />
                        </span>

                        <span className='chatCanvas_message_candidate_name'>{name}</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_skills'>Exp: {yearsOfWorkExperience} Years</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_country'>{country}</span>

                    </div>
                    <div className='flex flex-center gap-1'>
                        <div>
                            <button className='btn-primary btn-shadow flex flex-center gap-1' style={{
                                color: isShortlisted ?
                                    "#4A00E0" : "white", backgroundColor: isShortlisted ? "#CED2D8" : "#6E49BD"
                            }} onClick={handleShortlist}>
                                <img src={isShortlisted ? BookmarkActive : BookmarkWhite} alt='Shortlisted' />
                                {isShortlisted ? "Shortlisted" : "Shortlist"}
                            </button>
                        </div>
                        <div>
                            <button className='btn-primary btn-shadow flex flex-center' style={{ height: "20px" }}>
                                <img src={HireIcon} alt='Hire' className='hireIcon' />
                                <p className=' ' >Hire Instantly</p> </button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <span>Available for :</span>
                    <span>{fullTime ? "Full Time" : null}</span>
                    <span>{partTime ? "Part Time" : null}</span>
                </div>
                <div className='chatCanvas_message_candidate_skills flex gap-1'>
                    {"Expert In : "} {skills.map((skill, index) => (
                        <div key={index} className='chatCanvas_message_candidate_skill'>{skill}</div>
                    ))}
                </div>
                <div>
                    <p>{summary}</p>
                </div>
            </div>
            {/* Bottom card */}
            <div>
               {toggleView && <ProfileCard candidateData={candidateData} />}
            </div>
            {/* Card Toggler */}
            <div>
                <button className='btn-primary btn-extended' onClick={handleToggleView}>View Profile</button>
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
        yearsOfWorkExperience: PropTypes.number.isRequired
    })
}

