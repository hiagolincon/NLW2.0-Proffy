import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader/";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";
import ToggleTheme, { Props} from "../../components/ToggleTheme";

import { PageTeacherList, Main, Toggle} from './styles';

const TeacherList: React.FC<Props> = ({ toggleTheme }) => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');


  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    
    setTeachers(response.data);
  }

  return (
    <PageTeacherList>
      <Toggle>
        <ToggleTheme toggleTheme={toggleTheme} />
      </Toggle>

      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Geografia", label: "Geografia" },
              { value: "Matemática", label: "Matemática" },
              { value: "Ingles", label: "Ingles" },
              { value: "Historia", label: "Historia" },
              { value: "Fisica", label: "Fisica" },
              { value: "Portugues", label: "Portugues" },
              { value: "Quimica", label: "Quimica" },
            ]}
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
              { value: "6", label: "Sábado" },
            ]}
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
          />

          <Input name="time"
           label="Hora" 
           type="time" 
           value={time}
           onChange={e => setTime(e.target.value)} />

           <button type="submit">
             Buscar
           </button>
        </form>
      </PageHeader>

      <Main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </Main>
    </PageTeacherList>
  );
}


export default TeacherList;