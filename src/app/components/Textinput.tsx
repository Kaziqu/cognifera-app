export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
        className="w-full p-2 mb-3 border rounded"
        {...props}
        />
    );
}