<?php

it('returns a branded 404 page for unknown routes', function () {
    $response = $this->get('/this-route-does-not-exist');

    $response->assertNotFound();
    $response->assertSee('data-page=', escape: false);
    $response->assertSee('Errors', escape: false);
    $response->assertSee('"status":404', escape: false);
});