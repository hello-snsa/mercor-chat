import PropTypes from 'prop-types'
import { Bookmark } from '../../../assets/images';

export default function CandidateCard({ candidateData }) {

    const { profilePic, name, skills, country, yearsOfWorkExperience ,summary,fullTime,partTime} = candidateData;
    return (
        <div className='chatCanvas_message_candidate'>
            {/* <img src={profilePic} alt='Profile pic of candidate' className='chatCanvas_message_candidate_image' />
                        <div className='chatCanvas_message_candidate_name'>{name}</div>
                        <div className='chatCanvas_message_candidate_skills'>{skills.join(', ')}</div>
                        <div className='chatCanvas_message_candidate_country'>{country}</div> */}

                <div className='chatCanvas_message_candidate_top'>
                    <div className='chatCanvas_message_candidate_topLeft'>
                        <span className='chatCanvas_message_candidate_image'>
                            <img src={profilePic} alt={name} className='' />
                        </span>

                        <span className='chatCanvas_message_candidate_name'>{name}</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_skills'>Exp: {yearsOfWorkExperience} Years</span>
                        <span>{" | "}</span>
                        <span className='chatCanvas_message_candidate_country'>{country}</span>

                    </div>
                    <div>
                        <button className='btn-primary flex flex-center gap-1' style={{color:"white"}}>
                            <img src={Bookmark} alt='Bookmark' />
                            Shortlist
                            </button>
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
            
            <div>
                <button className='btn-primary' style={{width:"100rem",position:"relative", "bottom":"0", "left":"0",marginTop:"10rem"}}>View Profile</button>
            </div>
        </div>
    )
}

CandidateCard.propTypes = {
    candidateData: PropTypes.shape({
        profilePic: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
        country: PropTypes.string.isRequired,
        yearsOfWorkExperience: PropTypes.number.isRequired
    })
}

