######################################################################################################################
#  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.                                                #
#                                                                                                                    #
#  Licensed under the Apache License, Version 2.0 (the 'License'). You may not use this file except in compliance    #
#  with the License. A copy of the License is located at                                                             #
#                                                                                                                    #
#      http://www.apache.org/licenses/LICENSE-2.0                                                                    #
#                                                                                                                    #
#  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES #
#  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    #
#  and limitations under the License.                                                                                #
######################################################################################################################
def order_utterances(language):
    utterance_values = {
        "English": [
            {"utterance": "I would like tp order pizza"},
            {"utterance": "order pizza"},
            {"utterance": "pizza ordering"},
            {"utterance": "pizza"},
        ],
        "French": [
            {"utterance": "Je voudrais commander une pizza"},
            {"utterance": "commander une pizza"},
            {"utterance": "commande de pizza"},
            {"utterance": "je veux de la pizza"},
            {"utterance": "pizza"},
        ],
        "Italian": [
            {"utterance": "Vorrei ordinare una pizza"},
            {"utterance": "ordina una pizza"},
            {"utterance": "ordinare una pizza"},
            {"utterance": "Voglio una pizza"},
            {"utterance": "pizza"},
        ],
        "Spanish": [
            {"utterance": "Me gustar??a pedir pizza"},
            {"utterance": "order pizza"},
            {"utterance": "pedir pizza"},
            {"utterance": "Quiero pizza"},
            {"utterance": "pizza"},
        ],
        "German": [
            {"utterance": "Ich m??chte Pizza bestellen"},
            {"utterance": "Pizza bestellen"},
            {"utterance": "Ich will Pizza"},
            {"utterance": "pizza"},
        ],
    }
    return utterance_values[language]


def slot_types(slot_type_name, language):
    slot_type_values = {
        "PizzaType": {
            "English": [
                {"sampleValue": {"value": "Greek"}},
                {"sampleValue": {"value": "New York"}}, # NOSONAR this is a language specific word
                {"sampleValue": {"value": "Vegetarian"}},
            ],
            "French": [
                {"sampleValue": {"value": "Grecque"}},
                {"sampleValue": {"value": "New York"}}, # NOSONAR this is a language specific word
                {"sampleValue": {"value": "v??g??tarienne"}},
            ],
            "Italian": [
                {"sampleValue": {"value": "Greca"}},
                {"sampleValue": {"value": "New York"}}, # NOSONAR this is a language specific word
                {"sampleValue": {"value": "Vegetariana"}},
            ],
            "Spanish": [
                {"sampleValue": {"value": "Griega"}},
                {"sampleValue": {"value": "Nueva York"}},
                {"sampleValue": {"value": "vegetariana"}},
            ],
            "German": [
                {"sampleValue": {"value": "Griechische"}},
                {"sampleValue": {"value": "New Yorker"}},
                {"sampleValue": {"value": "Vegetarische"}},
            ],
        },
        "PizzaSize": {
            "English": [
                {"sampleValue": {"value": "small"}},
                {"sampleValue": {"value": "medium"}},
                {"sampleValue": {"value": "large"}},
                {"sampleValue": {"value": "extra-large"}},
            ],
            "French": [
                {"sampleValue": {"value": "petit"}},
                {"sampleValue": {"value": "moyen"}},
                {"sampleValue": {"value": "grand"}},
                {"sampleValue": {"value": "tr??s-grand"}},
            ],
            "Italian": [
                {"sampleValue": {"value": "piccola"}},
                {"sampleValue": {"value": "media"}},
                {"sampleValue": {"value": "grande"}},
                {"sampleValue": {"value": "extra-grande"}},
            ],
            "Spanish": [
                {"sampleValue": {"value": "peque??o"}},
                {"sampleValue": {"value": "mediano"}},
                {"sampleValue": {"value": "grande"}},
                {"sampleValue": {"value": "extra-grande"}},
            ],
            "German": [
                {"sampleValue": {"value": "klein"}},
                {"sampleValue": {"value": "mittel"}},
                {"sampleValue": {"value": "gro??"}},
                {"sampleValue": {"value": "extra-gro??"}},
            ],
        },
        "PizzaCrust": {
            "English": [
                {"sampleValue": {"value": "thin"}},
                {"sampleValue": {"value": "thick"}},
            ],
            "French": [
                {"sampleValue": {"value": "mince"}},
                {"sampleValue": {"value": "??paisse"}},
            ],
            "Italian": [
                {"sampleValue": {"value": "sottile"}},
                {"sampleValue": {"value": "spessa"}},
            ],
            "Spanish": [
                {"sampleValue": {"value": "fina"}},
                {"sampleValue": {"value": "gruesa"}},
            ],
            "German": [
                {"sampleValue": {"value": "d??nn"}},
                {"sampleValue": {"value": "dick"}},
            ],
        },
    }
    return slot_type_values[slot_type_name][language]


def slot_messages(language, slot_type_name):
    slot_message_values = {
        "type": {
            "English": {"value": "What type of pizza would you like?"},
            "French": {"value": "Quel type de pizza souhaitez-vous?"},
            "Italian": {"value": "Che tipo di pizze vorresti?"},
            "Spanish": {"value": "Que tipo de pizza te gustaria?"},
            "German": {"value": "Welche Art von Pizze m??chten Sie?"},
        },
        "size": {
            "English": {
                "value": "What size would you like, (small, medium, large, or extra-large)?"
            },
            "French": {
                "value": "Quelle taille aimeriez-vous (petit, moyen, grand, ou tr??s-grand)?"
            },
            "Italian": {
                "value": "Che dimensione vorresti (piccola, media, grande o extra-grande)?"
            },
            "Spanish": {
                "value": "??Qu?? tama??o le gustar??a (peque??o, mediano, grande o extra-grande)?"
            },
            "German": {
                "value": "Welche Gr????e m??chten Sie (klein, mittel, gro?? oder extra-gro??)?"
            },
        },
        "crust": {
            "English": {"value": "What crust would you like, (thin or thick)?"},
            "French": {"value": "Quelle cro??te aimeriez-vous (mince ou ??paisse)?"},
            "Italian": {"value": "Quale crosta vorresti (sottile o spessa)?"},
            "Spanish": {"value": "??Qu?? corteza te gustar??a, (fina o gruesa)?"},
            "German": {"value": "Welche Kruste m??chten Sie (d??nn oder dick)?"},
        },
        "count": {
            "English": {"value": "How many pizzas would you like?"},
            "French": {"value": "Combien de pizzas souhaitez-vous?"},
            "Italian": {"value": "Quante pizze vorresti?"},
            "Spanish": {"value": "??Cu??ntas pizzas te gustar??a?"},
            "German": {"value": "Wie viele Pizzen m??chten Sie?"},
        },
    }
    return slot_message_values[slot_type_name][language]
