import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify'
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, NovoAluno, ProfilePicture, Title } from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    };

    getData();
  }, []);


  const handleDeleteAsk = e => {
    e.preventDefault();
    const exlcamation = e.currentTarget.nextSibling;
    exlcamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  }

  const handleDelete = async (e, id, index) => {
    
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      if(status === 401){
        toast.error('Voçê precisa fazer login');
      }else{
        toast.error('Ocorreu um erro ao excluir aluno')
      }
    }
    setIsLoading(false);
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>
        Alunos
        <NovoAluno to='/aluno'>Novo aluno</NovoAluno>
      </Title>

      

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={21} fill='#4942E4' />
            </Link>
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={21} fill='#FF0060' />
            </Link>

            <FaExclamation
              onClick={e => handleDelete(e, aluno.id, index)}
              size={21}
              display='none'
              cursor='pointer' />
          </div>
        ))}
      </AlunoContainer>

    </Container>
  );
}

