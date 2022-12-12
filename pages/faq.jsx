// import '../styles/Faq.module.css';
import { Accordion } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'hero',
        'schedule',
        'faq',
      ])),
      // Will be passed to the page component as props
    },
  }
}

const Faq = () => {
    const { t } = useTranslation('faq')

    return (
        <>
        <Head>
            <title>
                {t('Title')}
            </title>
            <meta
                name="desciption"
                content='Når og hvor trener vi? · Hvor får jeg "siste nytt" fra klubben? · Kan barn trene med oss?'
            />
        </Head>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                {t('Title')}
            </h1>
            <div className='flex justify-center pb-20'>
                <Accordion
                    alwaysOpen={true}
                    flush={true}
                    className='w-3/4 text-white md:w-2/3 lg:w-1/2'
                >
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('When and where')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('When and where answare 1')}
                                </li>
                                <li>
                                    {t('When and where answare 2')}
                                </li>
                                <li>
                                    {t('When and where answare 3')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                        title={t('BAC FB group link des')}
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    &nbsp;, {t('When and where answare 3.5')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Parking')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Parking answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Wardrobe')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Wardrobe answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Bus')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Bus answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Last news')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Last news answare 1')} &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                        title={t("BAC FB group link des")}
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    {t('Last news answare 1.5')}
                                </li>
                                <li>
                                    {t('Last news answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Who trains here')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Who trains here answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Kids')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Kids answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Compete to join')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Compete to join answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Leaders')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Leaders answare 1')}
                                </li>
                                <li>
                                    {t('Leaders answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('First time')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('First time answare')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Training clothes')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Training clothes answare 1')}
                                </li>
                                <li>
                                    {t('Training clothes answare 2')}
                                </li>
                                <li>
                                    {t('Training clothes answare 3')}
                                </li>
                                <li>
                                    {t('Training clothes answare 4')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            {t('Cost')}
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    {t('Cost answare 1')}
                                </li>
                                <li>
                                    {t('Cost answare 2')}
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvem styrer klubben?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Vi har et styre bestående av en leder,
                                    nestleder, 2 styremedlemmer og 1 varamedlem.
                                    {/* Linkes til bilder av oss? */}
                                </li>
                                <li>
                                    Årlig gjennomføres generalforsamling der
                                    alle medlemmer inviteres og har anledning
                                    til å være med å ta opp saker og har
                                    stemmerett.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hva er reglene i håndbak?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Hovedhensikten er å få motstanders hånd
                                    nedenfor en viss høyde på sin side av
                                    håndbakbordet. Man kan også vinne på at
                                    motstander gjør for mange feil.
                                </li>
                                <li>
                                    Man konkurrerer stående på standardisert
                                    bord.
                                </li>
                                <li>
                                    Man holder alltid albuen på paden, mens
                                    motsatt arm holde i peg (metallstang).
                                    Skuldrene er parallelle ved start,
                                    tommelknoker synes på begge hender, ingen
                                    berører hverandres hender med andre
                                    kroppsdeler. Håndleddene er rette.
                                </li>
                                <li>
                                    Dommeren sier “ready go!”, og etter dette
                                    kan man bøye håndledd så mye man vil og
                                    bevege seg det man trenger, så lenge albuen
                                    forblir på paden og andre armen holder i
                                    peg. Én fot må alltid være i bakken.
                                </li>
                                <li>
                                    Farlige posisjoner for utøver der man har
                                    stor fare for å skade seg stoppes som regel
                                    av dommer.
                                </li>
                                <li>
                                    Det finnes advarsler/warnings og feil/fouls.
                                    2 advarsler kan bli til én feil - litt
                                    avhengig av om man er i “dommergrep” eller
                                    ei.
                                </li>
                                <li>
                                    For mer detaljer omkring regler, spør oss i
                                    klubben, evt les også på &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='http://www.waf-armwrestling.com/armwrestling-rules/'
                                    >
                                        World Armwrestling Federation (WAF)
                                    </Link>
                                    &nbsp; sine sider.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Kan man sitte og bryte håndbak?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Ja, man har parabord med kortere ben for de
                                    som ikke kan stå og bryte. Klubben har ett
                                    sett med korte ben som kan settes på et bord
                                    ved behov.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvilke teknikker brukes?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    I hovedsak kan man dele håndbak inn i 3
                                    hovedteknikker.
                                    <ul>
                                        <li>
                                            Top roll: mye fokus på
                                            “håndkontroll” og å styre
                                            motstanders hånd
                                        </li>
                                        <li>
                                            Hook: mer fokus på å bruke
                                            “armstyrke” og trekke motstander til
                                            paden.
                                        </li>
                                        <li>
                                            Press: fokus på å bruke triceps og
                                            presse motstander ned mot pad
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvor kan jeg finne mer informasjon om teknikker og
                            øvelser?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Det finnes mye på nettet, særlig Youtube.
                                    Kanalen &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.youtube.com/c/voiceofarmwrestling'
                                    >
                                        “Voice of Armwrestling”
                                    </Link>
                                    , blant andre, i regi av to meritterte
                                    latviske utøvere, har veldig mange
                                    informative videoer i sitt arkiv.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det mye skader i håndbak?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Som i alle idretter er det jo alltid en
                                    sjanse for skader, særlig når man trener mot
                                    andre personer, men hvis man bruker tid på å
                                    få god og trygg teknikk, er risikoen for
                                    alvorlige skader liten. En viktig regel på
                                    treningene er at man aldri bryter raskt og
                                    brått mot andre uten å avtale det på forhånd
                                    - særlig hvis en er veldig mye
                                    sterkere/erfaren enn den andre. Ta vare på
                                    hverandre!
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det ulike klasser man konkurrerer i?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Ja, det er både ulike vektklasser og
                                    aldersklasser, både for venstre arm og høyre
                                    arm. I Norge har man noe større vekthopp per
                                    klasse og færre vektklasser enn i EM og VM,
                                    grunnet antall deltakere. Seniorklassen er
                                    regnet som den tøffeste og er en “åpen”
                                    klasse der alle kan delta. Juniorklasser
                                    deles inn i flere trinn. Det finnes egne
                                    aldersklasser for de over 40 år, 50 år osv
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hva hvis jeg vil konkurrere - hva trenger jeg?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Da må du ha konkurranseskjorte. Denne kjøper
                                    du via klubbens lager, eller når det
                                    bestilles inn nye partier. På første
                                    skjorten dekker klubben 200kr av kostnaden.
                                    Ved nye bestillinger, legges det ut
                                    informasjon om dette på vår &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                    >
                                        facebookgruppe.
                                    </Link>
                                </li>
                                <li>
                                    Du må ha lisens:
                                    {/* not here */}
                                    <ul>
                                        <li>
                                            Engangslisens eller årslisens.
                                            Årslisens er også inkludert en
                                            helseforsikring
                                        </li>
                                        <li>
                                            Lisens er via &nbsp;
                                            <Link
                                                className='underline hover:text-ba-color-gold'
                                                href='https://bryting.no/praktisk-info/lisens-og-forsikring/'
                                            >
                                                Bryteforbundet
                                            </Link>
                                            {/* (link til lisensinfo) */}, og
                                            klubben har ingen økonomisk
                                            tilknytning til dette.
                                        </li>
                                        <li>
                                            Man må være klubbmedlem for å få
                                            lisens og klubben aktiverer
                                            muligheten for utøver til å betale
                                            lisens via &nbsp;
                                            <Link
                                                className='underline hover:text-ba-color-gold'
                                                href='https://www.minidrett.no/'
                                            >
                                                MinIdrett.no.
                                            </Link>
                                            Ta kontakt ved spørsmål.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Man må betale en deltageravgift per arm
                                    (høyre og/eller venstre) og per vektklasse.
                                    Er man med i flere vektklasser, kan det være
                                    rabattert pris.
                                </li>
                                <li>
                                    Klubben dekker dommeravgift til
                                    Bryteforbundet på vegne av deltakerne.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det dopingkontroller i håndbak?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Ja, det er det. Sporten samarbeider med
                                    Antidoping Norge og vi er bl.a. sertifisert
                                    som Rent IL og oppfordrer alle utøvere til å
                                    gjennomføre sertifisering som Ren Utøver.
                                    Dopingkontroll skjer både på konkurranser og
                                    på treninger. Det kan også oppsøkes utøvere
                                    utenfor treningslokaler. Det er
                                    nulltoleranse for doping. Liste over
                                    forbudte stoffer finner man på &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.antidoping.no/medisinsk/dopinglisten'
                                    >
                                        dopinglitsen
                                    </Link>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvordan er håndbakmiljøet nasjonalt?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Håndbakmiljøet i Norge er svært åpent og
                                    avstanden fra topputøvere til nybegynnere er
                                    lav mtp informasjonsutveksling, vedbåde
                                    konkurranser og treninger. Det sies som
                                    regel klart "ja" om man er omkring og ønsker
                                    besøke andre klubber for å trene når man
                                    ikke er hjemme ved egen klubb. Det er en
                                    sport i fremdrift, nå med Norges Cup hvor
                                    flere stevner i året settes sammen, blant
                                    annet NM
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>
    );
};

export default Faq;
