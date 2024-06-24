import axios from 'axios';
import React, { useEffect } from 'react'
import { USER_VIDEO } from '../../../utils/apiConstants';

export default function ProfileCard({ candidateData }) {
    const { fullTime, partTime, fullTimePrice, fullTimeAvailability, partTimeAvailability, partTimePrice, videoRecording,projects,awards,education,workExperience } = candidateData;

    const [recordingUrl, setRecordingUrl] = React.useState('')

    const getVideoRecording = async () => {
        try {
            const response = await axios.post(USER_VIDEO,
                {
                    "bucketName": "ai_interviewer_recordings", "objectName": videoRecording.split("/ai_interviewer_recordings/")[1]
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
        }
    }

    useEffect(() => {
        recordingUrl === "" && getVideoRecording()
    }, [])

    return (
        <div className='profileCard' >
            <div className='flex  gap-1 flex-space-between' style={{ width: "100rem", "margin": "1rem" }}>
                <>
                    {fullTime ? <div>
                        <p>Full Time</p>
                        <p>Can start 40+ hours / week {fullTimeAvailability <= 0 ? "immediately" : " in " + fullTimeAvailability + " weeks"}</p>
                        <p>$ {fullTimePrice} / month</p>
                    </div> : null}
                </>
                <>
                    {partTime ? <div>
                        <p>Part Time</p>
                        <p>Can start 20+ hours / week {partTimeAvailability <= 0 ? "immediately" : " in " + partTimeAvailability + " weeks"}</p>
                        <p>$ {partTimePrice} / month</p>
                    </div> : null}
                </>

            </div>
            <div>
                <p>AI Interview</p>

                {recordingUrl !== "" ? <video width="750" height="500" controls >
                    <source src={recordingUrl} type="video/mp4" />
                </video> : null}

            </div>
            {/* Work experience */}
            {workExperience?.length>0?<div>
                <h2>Work Experience</h2>

            </div>:null}
            {/* Education */}
            {education?.length>0 ?<div>
                <h2>Education</h2>
            </div>:null}
            {/* Awards */}
            {awards?.length>0? <div>
                <h2>Awards</h2>
                {awards?.map((award, index) => (
                        <li key={index} className='profileCard_award'>{award?.description}</li>
                ))}
            </div>:null}
            {/* Projects */}
            {projects?.length>0 ?<div>
                <h2>Projects</h2>
                {projects?.map((project, index) => (
                        <li key={index} className='profileCard_project'>{project?.title} - {project?.description}</li>
                ))}

            </div>:null}
        </div>
    )
}
