export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();

    reset(): void {
        this.sanduiche = new SanduicheBuilder();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread
    setProtein
    setSalad
    addSauce
}
