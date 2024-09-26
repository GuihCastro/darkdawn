import style from './IntroBanner.module.scss';

export default function IntroBanner() {
    return (
        <div className={style.container}>
            <img src="/assets/banner3.jpg" alt="Banner" />
            <div className={style.text}>
                <div className={style.title}>
                    <h2>
                        <img src="/assets/logo.png" alt="DarkDawn logo" />
                    </h2>
                    <h3>An art project by Mari Livraes and Mike Azevedo</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat natus quasi iure accusamus. Nisi voluptate magnam fugiat neque nobis quo nihil ipsum fugit facilis ut. Itaque dolorem quos sapiente harum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quidem neque nisi voluptatibus vitae deserunt, tempore blanditiis mollitia in quia ex nulla cum porro eum sed aliquid quis et repellat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis sed reiciendis consectetur necessitatibus consequuntur temporibus odio officiis nemo error, in obcaecati cum iusto! At natus autem voluptatem earum. Accusamus?
                </p>
            </div>        </div>
    );
}
