import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useGeolocation from "react-hook-geolocation";
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
  const geolocation = useGeolocation();
  const lat = geolocation.latitude;
  const long = geolocation.longitude;
  console.log(lat, long);

  const getData = () => {
    const Key = "c7cfd3dfd9015e576d647558a7c4bd13";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.388288&lon=126.9628928&appid=${Key}&units=metric`
      )
      .then((resoponse) => {
        console.log(resoponse);
        setTemp(resoponse.data.main.temp);
        sethumdity(resoponse.data.main.humidity);
        setCity(resoponse.data.name);
      });
  };

  useEffect(getData, []);

  return (
    <>
      <BookBehindCover>
        <BookFrontCover>
          <ProfileInfo>
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: "200px", marginBottom: "30px" }}
            />
            <ProfileDetail>
              <ProfileTitle>이름:</ProfileTitle>
              <Profilecontent>하이하이루</Profilecontent>
            </ProfileDetail>
            <ProfileDetail>
              <ProfileTitle>좋아하는 장르:</ProfileTitle>
              <Profilecontent>판타지, 스포츠</Profilecontent>
            </ProfileDetail>
            <ProfileDetail>
              <ProfileTitle>거주지역:</ProfileTitle>
              <Profilecontent>{city}</Profilecontent>
            </ProfileDetail>
            <ProfileDetail>
              <ProfileTitle>온도:</ProfileTitle>
              <Profilecontent>{temp}도</Profilecontent>
            </ProfileDetail>
            <ProfileDetail>
              <ProfileTitle>습도:</ProfileTitle>
              <Profilecontent>{humdity}%</Profilecontent>
            </ProfileDetail>
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
