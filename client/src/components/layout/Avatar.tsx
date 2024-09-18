import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommonAvatarProps {
    src: string | null | undefined;
}

const CommonAvatar: React.FC<CommonAvatarProps> = ({src}) => {
    return (
        <Avatar className="cursor-pointer">
            <AvatarImage src={src || '/images/placeholder.jpg'} />
            <AvatarFallback>AV</AvatarFallback>
        </Avatar>
    );
};

export default CommonAvatar;
