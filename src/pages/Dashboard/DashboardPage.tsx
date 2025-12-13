// Components
import UserStats from "../../components/UserStats/UserStats";
import CardDetails from "../../components/CardDetails";
import Header from "../../components/Dashboard/Header";
import Container from "../../components/Dashboard/Container";
import Section from "../../components/Dashboard/Section";
import ButtonSection from "../../components/Dashboard/ButtonSection";
import Button from "../../components/Dashboard/Button";
import MainSection from "../../components/Dashboard/MainSection";
import Binder from "../../components/Dashboard/Binder";

// Data
import { userstats } from "../../data/userstats";
import { pokemoncard } from "../../data/pokemoncard";

export default function DashboardPage() {
  return (
    <Container>
        <Header />
        <Section>
          <UserStats key={userstats.id} userStatsData={userstats}/>
          <ButtonSection>
            <Button actionName="Scan Card" actionIcon="" />
            <Button actionName="Add Card" actionIcon="/icons/add-icon.svg" />
          </ButtonSection>
        </Section>
        <MainSection>
          <Binder/>
          <CardDetails cardDetail={pokemoncard} />
        </MainSection>
    </Container>
  );
}
