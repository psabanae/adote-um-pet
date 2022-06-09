import { useState, useEffect } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiService";

export function useList() {
    const [listAdoptions, setListAdpotions] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes').then((response) => {
            setListAdpotions(response.data);
        })
    }, [])

    return {listAdoptions};
}