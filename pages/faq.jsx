// import '../styles/Faq.module.css';
import { Accordion } from "flowbite-react";
import Link from "next/link";

const Faq = () => {
    return (
        <>
            <h1 className='pt-8 mb-8 text-5xl text-center text-ba-color-gold'>
                Spørsmål og svar
            </h1>
            <div className='flex justify-center'>
                <Accordion
                    alwaysOpen={true}
                    flush={true}
                    className='w-3/4 text-white md:w-2/3 lg:w-1/2'
                >
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Når og hvor trener vi?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Tirsdager kl 19-21 på “Gnisten”,
                                    Håsteinsgaten 3 - stort sett gjennom hele
                                    året.
                                </li>
                                <li>
                                    Eventuelle ekstratreninger, som tidvis kan
                                    forekomme, meldes fortløpende
                                </li>
                                <li>
                                    Ofte legges det ut et innlegg på
                                    facebookgruppen vår, &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/profile.php?id=100063867946394'
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    &nbsp;, i forkant av ukens trening, der
                                    mange melder sin ankomst
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det parkeringsplass ved treningslokalet?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Ja, det noen gratis parkeringsplasser ved
                                    lokalet; rett foran lokalets vinduer og på
                                    høyre siden (når man ser mot lokalet). Det
                                    er også mulig å stå foran det gule bygget
                                    tilhørende kommunen. I gatene i området er
                                    det soneparkering.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det garderobe?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Vi disponerer stort toalett der det god
                                    plass til å skifte om man har behov for
                                    dette
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvordan er bussforbindelsen til treningslokalet?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Man har en kort gåtur fra nærmeste busstopp.
                                    Fra sentrum går linje 6 og 19. Fra
                                    Danmarksplass området går linje 20.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvor får jeg “siste nytt” fra klubben?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    På facebookgruppen, &nbsp;
                                    <Link
                                        className='underline hover:text-ba-color-gold'
                                        href='https://www.facebook.com/groups/702890543475643'
                                    >
                                        “Bergen Armwrestling Club”
                                    </Link>
                                    , legger vi aktuell informasjon om
                                    treninger, bestilling av klær, påminninger
                                    om kommende konkurranser osv. For øvrig er
                                    det bare å spørre styret om ting man måtte
                                    lure på.
                                </li>
                                <li>
                                    Gruppen er lukket for å unngå mye unødig
                                    “vegginfo” på alles facebookfeed, men alle
                                    slipper til.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hvem trener hos oss?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Per idag er hovedandelen medlemmer voksne,
                                    og noen ungdom. Vi har gutter og jenter på
                                    treningene. Flott om begge kjønn er
                                    representert! Ønsker også enda flere av den
                                    yngre garde til å trene med oss! Folk med
                                    svært variert bakgrunn trener med oss. Noen
                                    med mye treningsbakgrunn, andre uten.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Kan barn trene med oss?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Vi anbefaler en nedre grense på 13år, som er
                                    den laveste aldersgruppen i konkurranser
                                    også. Når de yngste starter å trene med oss,
                                    ønsker vi at foresatt/voksen er med initielt
                                    og har dialog med oss for å sikre god
                                    inngang til idretten. Ingen egne
                                    barnetreninger eksisterer per idag, men
                                    dette er noe vi vil kunne se på i fremtiden
                                    om interessen er stor nok.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Må man konkurrere for å trene med oss?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Nei, her er alle velkomne. Vi har utøvere på
                                    landslagsnivå og vi har de som trener uten
                                    konkurranseambisjoner.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Er det trenere som leder treningene?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Per idag er det fritt frem hvordan du vil
                                    trene, men vi har som mål at alle ser etter
                                    hverandre og passer på hverandre, og at alle
                                    kan bryte med alle. Er noen sterkere enn
                                    andre, kan den sterke f.eks “gi” den andre
                                    muligheter. Her kan man bruke strikk og
                                    teknikker som sikrer at begge parter får noe
                                    utav treningen. Vi har diverse manualer,
                                    kettlebells og strikk m.m. som man både kan
                                    varme opp med og trene styrke med. Noen
                                    varmer opp på håndbakbordet.
                                </li>
                                <li>
                                    Det er god kultur for å lære av hverandre
                                    både teknikk, taktikk, hvordan man bør trene
                                    på håndbakbordet og utenfor håndbakbordet.
                                    Noen har egne trenere, men de fleste har det
                                    ikke. Det er mye god informasjon på Youtube
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hva gjør jeg første treningen?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Er du ny i sporten anbefaler vi a du tar
                                    kontakt med en av de rutinerte medlemmene,
                                    gjerne en i styret, for å få opplæring i
                                    basisteknikker, og litt om hvordan
                                    treningene foregår. Vi er opptatt av at alle
                                    føler seg velkomne og at alle kan trene med
                                    alle.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Må jeg har noe spesielt treningstøy eller utstyr på
                            treningene?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Nei, du kan trene i vanlig treningstøy. Alt
                                    nødvendig utstyr for å bryte håndbak har
                                    klubben.
                                </li>
                                <li>
                                    Du kan kjøpe treningsskjorte på trening om
                                    du ønsker. Pris = 150kr
                                </li>
                                <li>
                                    Vi har ellers klubbjakke man kan bestille
                                </li>
                                <li>
                                    Annet klubbtøy vil kunne komme etter hvert.
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className=" text-ba-color-gold">
                            Hva koster det å være medlem?
                        </Accordion.Title>
                        <Accordion.Content className='listing'>
                            <ul>
                                <li>
                                    Medlemskontingenten er per 2022: 500kr for
                                    de som er 21 år og oppover. De under 21 år
                                    betaler 300kr. Kontingenten betales årlig og
                                    faktura sendes ut på nyåret.
                                </li>
                                <li>
                                    Alle nye får mulighet til 4 prøvetreninger
                                    gratis, før man må stilling til innmelding.
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
                                        href='/https://www.youtube.com/c/voiceofarmwrestling'
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
                                        href='/https://www.facebook.com/groups/702890543475643'
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
                                                href='/https://bryting.no/praktisk-info/lisens-og-forsikring/'
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
                                                href='/https://www.minidrett.no/'
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
                                        href='/https://www.antidoping.no/medisinsk/dopinglisten'
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
