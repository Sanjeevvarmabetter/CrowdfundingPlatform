import React from 'react';

function Header() {
    return(
        <div>
            <Header>
                <nav>
                    <a href="#">Home</a>
                    <a href="/projects">Available Projects</a>
                    <a href="/getfunded">Get Funded</a>
                    <a href="/connectMetamask" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Connect Wallet</a>
                </nav>
            </Header>
        </div>
    );

}

export default Header;
