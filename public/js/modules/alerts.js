export default {

    props: ['flash'],

    template: `
        <section id="alert-container">
            <p id="connection">{{flash}}</p>
        </section>
    `,
    data: function() {
        return {
         

        }
    }
}