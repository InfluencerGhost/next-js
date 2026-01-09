interface ProfileProps {
 name: string;
}
export default function Profile(props: ProfileProps ) {
    return <h1>This is my profile {props.name}</h1>
}