// Components
import UserStats from "@/components/UserStats/UserStats";
import CardDetails from "@/components/CardDetails";
import Header from "@/components/Dashboard/Header";
import Container from "@/components/Dashboard/Container";
import Section from "@/components/Dashboard/Section";
import ButtonSection from "@/components/Dashboard/ButtonSection";
import Button from "@/components/Dashboard/Button";
import MainSection from "@/components/Dashboard/MainSection";
import Binder from "@/components/Dashboard/Binder";

// Icons
import AddIcon from '@/assets/icons/add-icon.svg?react';
import ScanIcon from '@/assets/icons/scan-icon.svg?react';

// Data
import { userstats } from "@/data/userstats";
import { pokemoncard } from "@/data/pokemoncard";

export default function DashboardPage() {
  return (
    <Container>
        <Header />
        <Section>
          <UserStats key={userstats.id} userStatsData={userstats}/>
          <ButtonSection>
            <Button 
              label="Add Card" 
              icon={<AddIcon />} 
            />
            <Button 
              label="Scan Card" 
              icon={<ScanIcon />} 
            />
          </ButtonSection>
        </Section>
        <MainSection>
          <Binder/>
          <CardDetails cardDetail={pokemoncard} />
        </MainSection>
    </Container>
  );
}
