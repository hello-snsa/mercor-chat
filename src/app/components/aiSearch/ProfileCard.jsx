import axios from 'axios';
import React, { useEffect } from 'react'
import { USER_VIDEO } from '../../../utils/apiConstants';

export default function ProfileCard({ candidateData }) {
    const { fullTime, partTime, fullTimePrice, fullTimeAvailability, partTimeAvailability, partTimePrice,videoRecording } = candidateData;

    const [recordingUrl, setRecordingUrl] = React.useState('')

    const getVideoRecording = async() => {
        try {
            const response = await axios.post(USER_VIDEO,
                {
                    "bucketName":"ai_interviewer_recordings","objectName":videoRecording.split("/ai_interviewer_recordings/")[1]
            },{
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({videoRecording})
            })
            const data = await response.data;
            setRecordingUrl(data.url)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        recordingUrl==="" && getVideoRecording()
    }, [])
    return (
        <div className='profileCard' >
            {/* Toggle button */}
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

               {recordingUrl!=="" ? <video width="750" height="500" controls >
                    <source src={recordingUrl} type="video/mp4" />
                </video>:null}

            </div>
            {/* Work experience */}
            <div>
                        <h2>Work Experience</h2>
            </div>
        </div>
    )
}
