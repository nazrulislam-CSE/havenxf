
import Link from 'next/link';

export default function BlockCreate() {

    return (
        <main className="app_container">
            <div className="px-4 pt-6 overflow-hidden">
                <div className="heading_section">
                    <h4 className="heading --small">
                        Add a New Block
                    </h4>
                </div>

                <div className="mx-auto">
                    <div className="default_box_shadow">
                        <div className="overflow-x-auto">
                            <form action="https://havenexbackend.bkolpo.com/blocks" method="POST" enctype="multipart/form-data" class="default_form">
                                <input type="hidden" name="_token" value="BAe8pOhaO9K8TPlvyd6JREIYtAKu6H4hqEnC9Pqj" autocomplete="off" />        <div class="grid gap-8 mb-6 grid-cols-2">
                                    <div>
                                        <label for="block_name" class="form_label">Block Name</label>
                                        <input type="text" name="block_name" id="block_name" class="form_field" required="" fdprocessedid="r4kthu" />
                                    </div>

                                    <div>
                                        <label for="number_of_apartments" class="form_label">Number of Apartments</label>
                                        <input type="number" name="number_of_apartments" id="number_of_apartments" class="form_field" fdprocessedid="4b0xuk" />
                                    </div>

                                    <div>
                                        <label for="number_of_shops" class="form_label">Number of Shops</label>
                                        <input type="number" name="number_of_shops" id="number_of_shops" class="form_field" fdprocessedid="f3gbof" />
                                    </div>
                                </div>

                                    <button type="submit" class="default_button w-auto" fdprocessedid="2oue4">Add Block</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
