import "@auth/core";

declare module "@auth/core" {
    interface User {
        id: string;
        email: string;
        name?: string;
        role?: string; // Adiciona a role ao usuário
    }

    interface Session {
        user: User;
    }
}
