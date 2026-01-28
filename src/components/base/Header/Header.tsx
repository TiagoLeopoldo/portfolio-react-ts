import { useState, useEffect } from "react";
import type { ProfileInfo } from "../../../types/serviceTypes";
import "./Header.css";
import { getProfileInfo } from "../../../services/profileInfoServices";

const Header = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const data = await getProfileInfo();
        console.log("Informações do profile carregadas", data);
        setProfileInfo(data);
      } catch (error) {
        console.error("Erro ao carregar informações do profile", error);
        setError("Erro ao carregar informações do profile");
      } finally {
        setLoading(false);
      }
    }

    fetchProfileInfo();
  }, [])

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>{error}</p>;

  return (
    <header className='header'>
      {profileInfo ? <>
        <img src={profileInfo.photo} alt="Foto de perfil" className="photo" />

        <h1 className="title">Olá,<br />eu sou o <span>{profileInfo.name}</span></h1>

        <div className="information">
          <p className="job">{profileInfo.job} [<a href={profileInfo.linkedin} target="_blank">Linkedin</a>] [<a href={profileInfo.curriculum} target="_blank">Currículo</a>]</p>
          <p className="location">{profileInfo.location}</p>
          <p className="phone">
            <a href={`tel:+55${profileInfo.phone}`}>{profileInfo.phone}</a>
          </p>
          <p className="email">
            <a href={`mailto:${profileInfo.email}`}>{profileInfo.email}</a>
          </p>
        </div>
      </>
        : "Erro ao carregar!"
      }
    </header >
  )
}

export default Header;