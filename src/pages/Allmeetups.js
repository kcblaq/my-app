import MeetupList from "../components/meetups/MeetupList";



const DUMMY_DATA = [{
    id: 'meet1',
    title: 'First date',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'Lukas, Manja republic',
    description: 'Lorem5'
},
{
    id: 'meet2',
    title: 'First Mkparita Uka',
    image: 'https://picsum.photos/id/237/200/300',
    address: 'Lukas, Manja republic',
    description: 'Lorem5'
},
{
    id: 'meet3',
    title: 'First Omumu akwukwo nso',
    image: 'https://picsum.photos/200/300?random=1',
    address: 'Lukas, Manja republic',
    description: 'Lorem5'
}
];


function AllmeetupPage(){
    return <section>
        <h1> All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA} />

    </section>
}
export default AllmeetupPage;