import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const BookFrontCover = styled.div`
  width: 830px;
  height: 700px;
  margin: 0 auto;
  background: linear-gradient(217deg, #ad8787, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #53ad6d, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #624124, rgba(0, 0, 255, 0) 70.71%);
  border-radius: 20% 5% 5% 10%;
  position: relative;
  z-index: 1;
`;
const BookBehindCover = styled.div`
  background: linear-gradient(217deg, #4e4141, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #1d3c26, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #6c4d32, rgba(0, 0, 255, 0) 70.71%);
  width: 800px;
  height: 850px;
  border-radius: 20% 5% 5% 10%;
  margin: 64px auto 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BoockInside = styled.div`
  background: linear-gradient(to bottom, rgb(255 0 0 / 0%), #f5fdef);
  width: 700px;
  height: 100px;
  margin: 0 auto;
  border-radius: 40px 0 0 40px;
  transform: translateY(-34px);
`;

const ProfileDetail = styled.div`
  margin: 10px 0;
  display: flex;
  width: 300px;
`;

const ProfileTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  width: 150px;
`;

const Profilecontent = styled.div`
  font-size: 16px;
`;

const ProfileComment = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff776;
`;

function Profile() {
  const [temp, setTemp] = useState();
  const [humdity, sethumdity] = useState();
  const [city, setCity] = useState();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const profileData = [
    { id: 1, title: "name", titleKr: "이름", content: "하이루" },
    {
      id: 2,
      title: "genre",
      titleKr: "즐겨보는 장르",
      content: "판타지, 스포츠",
    },
    { id: 3, title: "city", titleKr: "거주지역", content: city },
    { id: 4, title: "temp", titleKr: "온도", content: `${temp} 도` },
    { id: 5, title: "hummity", titleKr: "습도", content: `${humdity} %` },
  ];

  navigator.geolocation.getCurrentPosition(function (position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  });
  const getData = () => {
    const Key = "c7cfd3dfd9015e576d647558a7c4bd13";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${Key}&units=metric`
      )
      .then((resoponse) => {
        setTemp(resoponse.data.main.temp);
        sethumdity(resoponse.data.main.humidity);
        setCity(resoponse.data.name);
      });
  };

  getData();

  return (
    <>
      <BookBehindCover>
        <BookFrontCover>
          <ProfileInfo>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "200px", marginBottom: "30px" }}
            />
            {profileData.map((detail) => (
              <ProfileDetail key={detail.id}>
                <ProfileTitle>{detail.titleKr}</ProfileTitle>
                <Profilecontent>{detail.content}</Profilecontent>
              </ProfileDetail>
            ))}
            <ProfileDetail>
              <ProfileComment>*오늘은 책 읽기 적절한 날*</ProfileComment>
            </ProfileDetail>
          </ProfileInfo>
        </BookFrontCover>
        <BoockInside></BoockInside>
      </BookBehindCover>
    </>
  );
}

export default Profile;
