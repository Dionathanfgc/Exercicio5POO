export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();

    reset(): void {
        this.sanduiche = new SanduicheBuilder();
    }
}