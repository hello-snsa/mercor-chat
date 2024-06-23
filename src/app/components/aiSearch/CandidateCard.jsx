import React from 'react'

export default function CandidateCard({ candidateData }) {

    const { profilePic, name, skills, country, yearsOfWorkExperience } = candidateData;
    return (
        <div className='chatCanvas_message_candidate'>
            {/* <img src={profilePic} alt='Profile pic of candidate' className='chatCanvas_message_candidate_image' />
                        <div className='chatCanvas_message_candidate_name'>{name}</div>
                        <div className='chatCanvas_message_candidate_skills'>{skills.join(', ')}</div>
                        <div className='chatCanvas_message_candidate_country'>{country}</div> */}
            <div>
                <div className='chatCanvas_message_candidate_top'>
                    <div className='flex chatCanvas_message_candidate_topLeft'>
                        <span className='chatCanvas_message_candidate_image'>
                            <img src={profilePic} alt='Profile pic of candidate' className='' />
                        </span>

                        <span className='chatCanvas_message_candidate_name'>{name}</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_skills'>Exp: {yearsOfWorkExperience} Years</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_country'>{country}</span>

                    </div>
                    <div>
                        <button className='btn-primary'>View Profile</button>
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
