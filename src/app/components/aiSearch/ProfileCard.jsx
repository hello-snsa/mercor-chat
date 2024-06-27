import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { USER_VIDEO } from '../../../utils/apiConstants';

export default function ProfileCard({ candidateData }) {

    const { fullTime, partTime, fullTimePrice, fullTimeAvailability, partTimeAvailability, partTimePrice, videoRecording, projects, awards, education, workExperience } = candidateData;

    const [recordingUrl, setRecordingUrl] = React.useState('')

    const getVideoRecording = async () => {
        try {
            const response = await axios.post(USER_VIDEO,
                {
                    "bucketName": "ai_interviewer_recordings", "objectName": videoRecording?.split("/ai_interviewer_recordings/")[1]
                }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ videoRecording })
            })
            const data = await response?.data;
            setRecordingUrl(data?.url)
        } catch (error) {
            console.log(error)
            //TODO: Show error message in Toast
        }
    }

    useEffect(() => {
        !recordingUrl && getVideoRecording()
    }, [])

    return (
        <div className='profileCard' >
            <div className='profileCard_availability' >
                <>
                    {fullTime ? <div className='lh-3'>
                        <span><b>Full Time : </b></span>
                        <span>Can start 40+ hours / week {fullTimeAvailability <= 0 ? "immediately" : " in " + fullTimeAvailability + " weeks"}</span>
                    </div> : null}
                </>
                <>
                    {partTime ? <div className='lh-3'>
                        <span><b>Part Time : </b></span>
                        <span>Can start 20+ hours / week {partTimeAvailability <= 0 ? "immediately" : " in " + partTimeAvailability + " weeks"}</span>
                    </div> : null}
                </>

            </div>
            <div className='chatCanvas_message_profile_video-container'>
                <hr />
                <h2>AI Interview</h2>
                {recordingUrl !== "" ? <video controls >
                    <source src={recordingUrl} type="video/mp4" />
                </video> : null}

            </div>
            {/* Work experience */}
            {workExperience?.length > 0 ? <div className='profile_bottom profile_work-experience'>
                <hr />
                <h2>Work Experience</h2>
                {
                    workExperience?.map((work, index) => (
                        <>
                            {work?.company ? <div key={index} className='profile_workExp'>
                                <div className='profile_education_summary mt-1r'>
                                    <img src={work?.companyLogo} alt='company Logo' className='round-icon ' />
                                    <div >
                                        <div className='profile_header' >
                                            <div>
                                                <p><b>{work?.role}</b></p>
                                                <p><i>{work?.company}{work?.company && work?.locationCity ? ", " : null}{work?.locationCity}{
                                                    (work?.company || work?.locationCity) && work?.locationCountry ? ", " : null}{work?.locationCountry}</i></p>
                                            </div>
                                            <div className='profile_education_timeline'>
                                                <span>{work?.startDate}</span>
                                                {work?.startDate ? " - " : null}
                                                <span>{work?.endDate ?? "Present"}</span>
                                            </div>
                                        </div>
                                        <div className='profile_education_description'>

                                            <p>{work?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> : null}
                        </>))
                }
            </div> : null}
            {/* Education */}
            {education?.length > 0 && education[0]?.degree ? <div>
                <hr />
                <h2>Education</h2>
                {
                    education?.map((edu, index) => (
                        <>
                            {edu?.degree ? <div key={index} className='flex mt-1r  flex-jc-sb'>
                                <div className='flex gap-1'>
                                    <img src={edu?.schoolLogo} alt='education icon' className='round-icon' />
                                    <div
                                    >
                                        <p><b>{edu?.degree}{edu?.degree && edu?.major ? ", " : null}{edu?.major}</b></p>
                                        <p><i>{edu?.school}</i></p>
                                    </div>
                                </div>
                                <div className='profile_education_timeline'>
                                    <span>{edu?.startDate}</span>
                                    {edu?.startDate && edu?.endDate ? " - " : null}
                                    <span>{edu?.endDate}</span>
                                </div>
                            </div> : null}
                        </>))
                }
            </div> : null}
            {/* Awards */}
            {awards?.length > 0 ? <div>
                <hr />
                <h2>Awards</h2>
                {awards?.map((award, index) => (
                    <li key={index} className='profile_award'>{award?.description}</li>
                ))}
            </div> : null}
            {/* Projects */}
            {projects?.length > 0 && projects[0]?.title ? <div >
                <hr />
                <h2 >Projects</h2>
                {projects?.map((project, index) => (
                    <li key={index} className='profile_award'>{project?.title} - {project?.description}</li>
                ))}

            </div> : null}
        </div>
    )
}

ProfileCard.propTypes = {
    candidateData: PropTypes.object,


}